package data.database.implementations;

import data.DTO.Stakeholder;
import data.database.interfaces.StakeholderDocumentI;

/**
 * Created by magnus
 */
public class StakeholderDocumentImpl extends DAOImpl<Stakeholder> implements StakeholderDocumentI {
  public StakeholderDocumentImpl() {
    super("stakeholder");
  }
}
