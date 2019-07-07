package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.widget.ImageView;

import com.facebook.react.bridge.ReadableMap;
import com.squareup.picasso.Picasso;

import java.io.IOException;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

public class AsyncBitmpas extends AsyncTask<ReadableMap, Void, Map<String, Bitmap>> {

    private final Picasso picasso;
    private final WeakReference<ImageView> weakReference;
    private final BitmapsCallback callback;

    public AsyncBitmpas(ImageView imageView, BitmapsCallback callback) {
        picasso = Picasso.with(imageView.getContext());
        weakReference = new WeakReference<>(imageView);
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
            return map;
        } catch (IOException e) {
            e.printStackTrace();
            //TODO add error bitmaps
            return null;
        }
    }

    @Override
    protected void onPostExecute(Map<String, Bitmap> map) {
        //TODO Seriously need default bitmap for errors
        ImageView imageView = weakReference.get();
        if (map == null || imageView == null) return;
        callback.bitmapsReady(map.get(Constants.DESTINATION), map.get(Constants.SOURCE), imageView);
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
