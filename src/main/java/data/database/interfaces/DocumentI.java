package data.database.interfaces;

import data.DTO.DocumentObject;

/**
 * Created by magnus
 */
public interface DocumentI {
  void add(DocumentObject documentObject);
  void update(String documentId, DocumentObject documentObject);
  DocumentObject get(String documentId);
  void delete(String documentId);
}
