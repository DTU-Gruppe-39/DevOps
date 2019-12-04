package controller.implementations;

import controller.interfaces.UsecaseController;
import data.DTO.Usecase;
import data.database.implementations.UsecaseDocumentImpl;
import data.database.interfaces.UsecaseDocumentI;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import java.util.List;

public class UsecaseControllerImpl implements UsecaseController {

    private UsecaseDocumentI usecaseDocument = new UsecaseDocumentImpl();

    @Override
    public List<Usecase> getAll() {
        return usecaseDocument.getAll();
    }

    @Override
    public Usecase get(String id) {
        try {
            return (Usecase) usecaseDocument.get(id);
        }
        catch (NullPointerException nullPointerException) {
            throw new NotFoundException("Could not find usecase");
        }
    }

    @Override
    public void add(Usecase usecase) {
        if (!(usecase.getUserStory().equals("")))
            usecaseDocument.add(usecase);
        else
            throw new BadRequestException("Userstory is not declared");
    }

    @Override
    public void update(String id, Usecase replaceUsecase) {
        try {
            usecaseDocument.update(id, replaceUsecase);
        }
        catch (NullPointerException nullPointerException) {
            throw new NotFoundException("Could not find usecase to update");
        }
    }

    @Override
    public void delete(String id) {
        usecaseDocument.delete(id);
    }
}
