package data.DTO;

/**
 * Created by magnus
 */
public class NewUser {
  private User user;
  private LoginDetails loginDetails;

  public NewUser(User user, LoginDetails loginDetails) {
    this.user = user;
    this.loginDetails = loginDetails;
  }

  public NewUser() {
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public LoginDetails getLoginDetails() {
    return loginDetails;
  }

  public void setLoginDetails(LoginDetails loginDetails) {
    this.loginDetails = loginDetails;
  }
}
