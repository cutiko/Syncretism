package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.widget.ImageView;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class PorterDuffView extends com.facebook.react.uimanager.SimpleViewManager<ImageView> implements BitmapsCallback {

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
        new AsyncBitmpas(imageView, this).execute(urls);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return Constants.getMap();
    }

    @Override
    public void bitmapsReady(Bitmap destination, Bitmap source, ImageView imageView) {
        Canvas canvas = new Canvas();
        Paint paint = new Paint();
        canvas.drawBitmap(destination, 0,0, paint);
        PorterDuff.Mode mode = PorterDuff.Mode.XOR;
        paint.setXfermode(new PorterDuffXfermode(mode));
        canvas.drawBitmap(source, 0, 0, paint);
        imageView.setImageBitmap(destination);
    }
}
