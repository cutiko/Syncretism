package cl.cutiko.porterduffview;

import android.graphics.Bitmap;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class PorterDuffView extends com.facebook.react.uimanager.SimpleViewManager<FrameLayout> implements BitmapsCallback {

    @Nonnull
    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    @Nonnull
    @Override
    protected FrameLayout createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new FrameLayout(reactContext);
    }

    @ReactProp(name = "urls")
    public void setUrl(FrameLayout frameLayout, ReadableMap urls){
        new AsyncBitmpas(frameLayout, this).execute(urls);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return Constants.getMap();
    }

    @Override
    public void bitmapsReady(Bitmap destination, Bitmap source, FrameLayout frameLayout) {
        cl.cutiko.porterduffview.view.PorterDuffView view = new cl.cutiko.porterduffview.view.PorterDuffView(
                frameLayout.getContext(),
                destination,
                source
        );
        view.setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        frameLayout.addView(view);
    }
}
