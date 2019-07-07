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

    private PorterDuff.Mode MODE = PorterDuff.Mode.LIGHTEN;
    private Paint paint;
    private final Bitmap destination, source;

    public PorterDuffView(Context context, Bitmap destination, Bitmap source) {
        super(context);
        paint = new Paint();
        this.destination = destination;
        this.source = source;
        paint.setXfermode(new PorterDuffXfermode(MODE));
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        //canvas.drawColor(Color.BLACK);
        //canvas.drawBitmap(destination, 0, 0, paint);
        //canvas.drawBitmap(source, 0, 0, paint);
        //int sc = canvas.saveLayer(0, 0, 200, 200, null, Canvas.ALL_SAVE_FLAG);
        /*Rect rect = */new Rect();
/*       */
        /*canvas.clipT*/
        canvas.drawBitmap(destination, 0, 0, paint);
        canvas.drawBitmap(source, 0, 0, paint);
       
        //paint.setXfermode(null);
        //canvas.restoreToCount(sc);
    }
}
