package api;

import data.DTO.Role;

import javax.ws.rs.NameBinding;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Created by magnus
 */
@NameBinding
@Retention(RetentionPolicy.RUNTIME)
//Target both classes (types) and functions (methods)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Secured {
  //Define role for annotation value to determine access level
  Role[] value() default {Role.Developer};
}
