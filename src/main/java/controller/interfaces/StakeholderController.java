package controller.interfaces;

import data.DTO.Stakeholder;

import java.util.List;

public interface StakeholderController {
    void add(String name, String contact_person, String email, Boolean stakeholder_type);
    List<Stakeholder> getAll();
    Stakeholder get(String id);
}
