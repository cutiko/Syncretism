package cl.cutiko.porterduffview;

import android.util.Log;
import android.widget.ImageView;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.squareup.picasso.Picasso;

import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class PorterDuffView extends com.facebook.react.uimanager.SimpleViewManager<ImageView> {

    @Nonnull
    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    @Nonnull
    @Override
    protected ImageView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new ImageView(reactContext);
    }

    @ReactProp(name = "urls")
    public void setUrl(ImageView imageView, ReadableMap urls){
        final String destination = urls.getString(Constants.DESTINATION);
        final String source = urls.getString(Constants.SOURCE);
        if (!isValid(destination, source)) return;
        Log.d("CUTIKO_TAG", "PorterDuffView.java" + " setUrl urls " + urls.toString() );
        Picasso.with(imageView.getContext())
                .load(urls.getString(Constants.DESTINATION))
                .centerCrop()
                .fit()
                .into(imageView);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return Constants.getMap();
    }

    private boolean isValid(String destination, String source) {
        if (destination == null|| source == null) return false;
        if (destination.contains(" ")|| source.contains(" ")) return false;
        final int EMPTY = 0;
        if (destination.length() == EMPTY || source.length() == EMPTY) return false;
        final String http = "http";
        return destination.contains(http) && source.contains(http);
    }

    //Canvas canvas = new Canvas();
        /*Paint paint = new Paint();
        canvas.drawBitmap(destination, 0,0, paint);
        PorterDuff.Mode mode = PorterDuff.Mode.XOR;
        paint.setXfermode(new PorterDuffXfermode(mode));
        canvas.drawBitmap(source, 0, 0, paint);*/
}
