package api;

import controller.ControllerRegistry;
import controller.interfaces.ProjectController;
import data.DTO.Project;

import javax.ws.rs.*;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by magnus
 */
@Path("project")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProjectService {
  @Context
  ContainerRequestContext container;

  private ProjectController projectController = ControllerRegistry.getProjectController();

  @GET
  public List<Project> getProjects () {
    return projectController.getAll();
  }

  @GET
  @Path("{id}")
  public Project getProject(@PathParam("id") String id) {
    return projectController.get(id);
  }

  @POST
  public void postProject (Project project) {
    projectController.add(project);
  }

  @PUT
  public void putProject (Project updatedProject) {
    projectController.update(updatedProject.getId(), updatedProject);
  }
}
