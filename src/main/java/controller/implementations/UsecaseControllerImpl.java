package controller.implementations;

import controller.interfaces.UsecaseController;
import data.DTO.Usecase;
import data.database.implementations.UsecaseDocumentImpl;
import data.database.interfaces.UsecaseDocumentI;

import javax.ws.rs.BadRequestException;
import java.util.List;

public class UsecaseControllerImpl implements UsecaseController {

    private UsecaseDocumentI usecaseDocument = new UsecaseDocumentImpl();

    @Override
    public List<Usecase> getAll() {
        return usecaseDocument.getAll();
    }

    @Override
    public Usecase get(String id) {
        return (Usecase) usecaseDocument.get(id);
    }

    @Override
    public void add(Usecase usecase) {
        if (!(usecase.userStory.equals("")))
            usecaseDocument.add(usecase);
        else
            throw new BadRequestException("Userstory is not declared");
    }

    @Override
    public void update(String id, Usecase replaceUsecase) {
        usecaseDocument.update(id, replaceUsecase);
    }

    @Override
    public void delete(String id) {
        usecaseDocument.delete(id);
    }
}
