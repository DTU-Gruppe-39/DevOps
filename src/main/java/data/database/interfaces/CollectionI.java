package data.database.interfaces;

import data.DTO.DocumentObject;

import java.util.List;

/**
 * Created by magnus
 */
public interface CollectionI<T extends DocumentObject> {
  List<T> getAll();
}
