package cl.cutiko.porterduffview.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.view.View;

public class PorterDuffView extends View {

    private Paint paint;
    private final Bitmap destination, source;
    private final Rect rect = new Rect();

    public PorterDuffView(Context context, Bitmap destination, Bitmap source) {
        super(context);
        paint = new Paint(Paint.ANTI_ALIAS_FLAG);
        this.destination = destination;
        this.source = source;
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.XOR));
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.getClipBounds(rect);
        canvas.drawBitmap(destination, null, rect,  paint);
        canvas.drawBitmap(source, null, rect, paint);
    }
}
