package controller.interfaces;

import data.DTO.Stakeholder;

import java.util.List;

public interface StakeholderController {
    List<Stakeholder> getAll();
    Stakeholder get(String id);
    void add(Stakeholder stakeholder);
}
