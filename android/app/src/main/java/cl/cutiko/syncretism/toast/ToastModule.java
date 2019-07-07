package cl.cutiko.syncretism.toast;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class ToastModule extends ReactContextBaseJavaModule {


    public ToastModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return getName();
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return Durations.getMap();
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }


}
