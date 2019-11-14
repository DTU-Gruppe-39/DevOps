package data.database.implementations;

import data.DTO.Usecase;
import data.database.interfaces.UsecaseDocumentI;

public class UsecaseDocumentImpl extends DAOImpl<Usecase> implements UsecaseDocumentI {
    public UsecaseDocumentImpl() { super("usecase"); }
}
