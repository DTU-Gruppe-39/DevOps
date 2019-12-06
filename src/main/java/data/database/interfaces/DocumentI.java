package data.database.interfaces;

import data.DTO.DocumentObject;

/**
 * Created by magnus
 */
public interface DocumentI {
  void add(DocumentObject documentObject);
  void update(String projectId, String documentId, DocumentObject documentObject) throws NullPointerException;
  DocumentObject get(String projectId, String documentId) throws NullPointerException;
  void delete(String projectId, String documentId);
}
