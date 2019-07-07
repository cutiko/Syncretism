package cl.cutiko.porterduffview;

import java.util.HashMap;
import java.util.Map;

public class Constants {

    private static final Map<String, Object> map = new HashMap<>();
    public static final String DESTINATION = "DESTINATION";
    public static final String SOURCE = "SOURCE";

    public static Map<String, Object> getMap() {
        map.put(DESTINATION, "destination");
        map.put(SOURCE, "source");
        return map;
    }

}
