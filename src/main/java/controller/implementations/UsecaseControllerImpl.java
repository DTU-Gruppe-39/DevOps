package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.UsecaseController;
import controller.interfaces.UserController;
import data.DTO.Usecase;
import data.DTO.User;
import data.database.implementations.UsecaseDocumentImpl;
import data.database.interfaces.UsecaseDocumentI;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import java.util.List;

public class UsecaseControllerImpl implements UsecaseController {

    private UsecaseDocumentI usecaseDocument = new UsecaseDocumentImpl();
    private UserController userController = ControllerRegistry.getUserController();

    @Override
    public List<Usecase> getAll() {
        List<Usecase> usecases = usecaseDocument.getAll();
        for (Usecase usecase : usecases) {
            User user = userController.get(usecase.getResponsible());
            usecase.setResponsible(user.getEmail());
        }
        return usecases;
    }

    @Override
    public Usecase get(String id) {
        try {
            Usecase usecase = (Usecase) usecaseDocument.get(id);
            User user = userController.get(usecase.getResponsible());
            usecase.setResponsible(user.getEmail());
            return usecase;
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
