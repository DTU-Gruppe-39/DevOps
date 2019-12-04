package controller.implementations;

import controller.interfaces.StakeholderController;
import data.DTO.Stakeholder;
import data.database.implementations.StakeholderDocumentImpl;
import data.database.interfaces.StakeholderDocumentI;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import java.util.List;

public class StakeholderControllerImpl implements StakeholderController {
    private StakeholderDocumentI stakeholderDocument = new StakeholderDocumentImpl();

    @Override
    public void add(Stakeholder stakeholder) {
        if (!(stakeholder.getName().equals("")))
            stakeholderDocument.add(stakeholder);
        else
            throw new BadRequestException("Stakeholder entity is wrong");
    }

    @Override
    public void update(String id, Stakeholder replaceStakeholder) {
        try {
            stakeholderDocument.update(id, replaceStakeholder);
        }
        catch (NullPointerException nullPointerException) {
            throw new NotFoundException("Could not find stakeholder to update");
        }
    }

    @Override
    public void delete(String id) {
        stakeholderDocument.delete(id);
    }

    @Override
    public List<Stakeholder> getAll() {
        return stakeholderDocument.getAll();
    }

    @Override
    public Stakeholder get(String id) {
        try {
            return (Stakeholder) stakeholderDocument.get(id);
        }
        catch (NullPointerException nullPointerException) {
            throw new NotFoundException("Could not find stakeholder");
        }
    }

}
