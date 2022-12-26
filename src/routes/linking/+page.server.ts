import type { PageLoad } from "./$types";

export const load: PageLoad =({ route, request, url }) => {
  return {
    post: {
      title: `Title for goes here`,
      content: `Content for  goes here`
    }
  };
}
