import { readdirSync } from "fs";

/**
 * Import an mdx blog post file and return the metadata.
 * @param slug
 * @returns
 */
export async function getPostData(slug: string): Promise<{
	slug: string;
	image: string;
	title: string;
	excerpt: string;
	date: Date;
	author: string;
}> {
	//Lazy load the mdx file for the project
	try {
		const file = await import("@/blog/" + slug + ".mdx");

		if (file?.metadata) return file.metadata;
		else {
			throw new Error(`Unable to find metadata in file ${slug}.mdx`);
		}
	} catch (error: any) {
		console.log(error?.message);
		//Return empty metadata on failure
		return {
			slug: "",
			image: "",
			title: "",
			excerpt: "",
			date: new Date(),
			author: "",
		};
	}
}

/**
 * Scan the blog directory and return an array of file names
 * @returns
 */
export function getPostNames(): string[] {
	try {
		//Read the /blog folder at root dir
		const fileList: string[] = readdirSync("./blog/");
		//Return an array of filenames at this dir
		if (fileList.length > 0) {
			return fileList.map((file) => {
				//Remove extension
				return file.substring(0, file.lastIndexOf(".")) || file;
			});
		}
	} catch (error) {}
	return [];
}

/**
 * import each post in blog directory and return their metadata in an array
 * @returns
 */
export async function getPostsData(): Promise<
	{
		slug: string;
		image: string;
		title: string;
		excerpt: string;
		date: Date;
		author: string;
	}[]
 > {
  try {
    //Read the /blog folder at root dir
    const fileList: string[] = readdirSync("./blog/");

    //Load each file
    if (fileList.length > 0) {
      const result = fileList.map(async (file) => {
        //Remove extension to get slug
        const filename =
          file.substring(0, file.lastIndexOf(".")) || file;
        //Tro to get metadata
		return { ...(await getPostData(filename)), slug: filename };

      });

      return Promise.all(result);
    }
  } catch (error) {}
  return [];
}
