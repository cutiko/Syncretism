package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReadableMap;
import com.squareup.picasso.Picasso;

import java.io.IOException;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

public class AsyncBitmpas extends AsyncTask<ReadableMap, Void, Map<String, Bitmap>> {

    private final Picasso picasso;
    private final WeakReference<FrameLayout> weakReference;
    private final BitmapsCallback callback;

    public AsyncBitmpas(FrameLayout frameLayout, BitmapsCallback callback) {
        picasso = Picasso.with(frameLayout.getContext());
        weakReference = new WeakReference<>(frameLayout);
        this.callback = callback;
    }


    @Override
    protected Map<String, Bitmap> doInBackground(ReadableMap... maps) {
        final ReadableMap urls = maps[0];
        final String dest = urls.getString(Constants.DESTINATION);
        final String src = urls.getString(Constants.SOURCE);
        //TODO add error bitmaps
        if (!isValid(dest, src)) return null;
        try {
            //TODO this should be either Kotlin coroutines or a threadpool
            Bitmap destination = picasso.load(dest).get();
            Bitmap source = picasso.load(src).get();
            Map<String, Bitmap> map = new HashMap<>();
            map.put(Constants.DESTINATION, destination);
            map.put(Constants.SOURCE, source);
            Log.d("CUTIKO_TAG", "AsyncBitmpas.java" + " doInBackground: bitmpas ready" );
            return map;
        } catch (IOException e) {
            e.printStackTrace();
            //TODO add error bitmaps
            Log.d("CUTIKO_TAG", "AsyncBitmpas.java" + " doInBackground: ", e);
            return null;
        }
    }

    @Override
    protected void onPostExecute(Map<String, Bitmap> map) {
        //TODO Seriously need default bitmap for errors
        FrameLayout frameLayout = weakReference.get();
        if (map == null || frameLayout == null) return;
        callback.bitmapsReady(map.get(Constants.DESTINATION), map.get(Constants.SOURCE), frameLayout);
    }

    private boolean isValid(String destination, String source) {
        if (destination == null|| source == null) return false;
        if (destination.contains(" ")|| source.contains(" ")) return false;
        final int EMPTY = 0;
        if (destination.length() == EMPTY || source.length() == EMPTY) return false;
        final String http = "http";
        return destination.contains(http) && source.contains(http);
    }
}
