import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";



export const load: PageLoad = ({ params }) => {
  if (params.slug === "hello-world") {
    return {
      title: "Hello world",
      content: "welcome to our blog",
    };
  }

  if(params.slug === "about"){
    return {
      title: "About",
      content: "This is the about page",
    };
  }
  error(404, "Not Found");
};
