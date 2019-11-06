package data.DTO;


import java.util.Map;
/**
 * Created by magnus
 */
public abstract class DocumentObject {
  public abstract Map<String, Object> toMap();
  public abstract void toObject(Map<String, Object> mapOfObject);
}
