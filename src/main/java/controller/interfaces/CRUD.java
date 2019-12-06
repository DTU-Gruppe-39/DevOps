package controller.interfaces;

import data.DTO.DocumentObject;

import java.util.List;

/**
 * Created by magnus
 */
public interface CRUD <T extends DocumentObject> {
  List<T> getAll(String projectId);
  T get(String projectId, String id);
  void add(T element);
  void update(String projectId, String id, T replaceElement);
  void delete(String projectId, String id);
}
