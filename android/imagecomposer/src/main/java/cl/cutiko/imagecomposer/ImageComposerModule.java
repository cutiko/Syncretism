package cl.cutiko.imagecomposer;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ImageComposerModule extends ReactContextBaseJavaModule {

    public ImageComposerModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    @ReactMethod
    public Canvas compose(String destination, String source, Double object) {
        Log.d("CUTIKO_TAG", "ImageComposerModule.java" + " compose: " + object.toString());
        Canvas canvas = new Canvas();
        /*Paint paint = new Paint();
        canvas.drawBitmap(destination, 0,0, paint);
        PorterDuff.Mode mode = PorterDuff.Mode.XOR;
        paint.setXfermode(new PorterDuffXfermode(mode));
        canvas.drawBitmap(source, 0, 0, paint);*/
        return canvas;
    }
}
