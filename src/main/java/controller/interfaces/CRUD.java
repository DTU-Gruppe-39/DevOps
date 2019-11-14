package controller.interfaces;

import data.DTO.DocumentObject;

import java.util.List;

/**
 * Created by magnus
 */
public interface CRUD <T extends DocumentObject> {
  List<T> getAll();
  T get(String id);
  void add(T element);
  void update(String id, T replaceElement);
  void delete(String id);
}
