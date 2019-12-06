package data.database.interfaces;

import data.DTO.DocumentObject;
import data.DTO.Project;

import java.util.List;

/**
 * Created by magnus
 */
public interface ProjectDocumentI {
  List<Project> getAll();
  void add(DocumentObject documentObject);
  void update(String documentId, DocumentObject documentObject) throws NullPointerException;
  DocumentObject get(String documentId) throws NullPointerException;
  void delete(String documentId);
}
