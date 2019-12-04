package data.database.interfaces;

import data.DTO.DocumentObject;

/**
 * Created by magnus
 */
public interface DocumentI {
  void add(DocumentObject documentObject);
  void update(String documentId, DocumentObject documentObject) throws NullPointerException;
  DocumentObject get(String documentId) throws NullPointerException;
  void delete(String documentId);
}
