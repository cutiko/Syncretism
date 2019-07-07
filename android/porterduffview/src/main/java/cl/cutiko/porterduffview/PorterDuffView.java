package cl.cutiko.porterduffview;

import android.widget.ImageView;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.squareup.picasso.Picasso;

import javax.annotation.Nonnull;

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

    @ReactProp(name = "url")
    public void setUrl(ImageView imageView, String url){
        Picasso.with(imageView.getContext())
                .load(url)
                .centerCrop()
                .fit()
                .into(imageView);
    }

}
