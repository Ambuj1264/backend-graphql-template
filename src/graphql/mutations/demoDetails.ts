import DemoToolDetails from "../../database/model/demoToolDetails";

export const createDemoDetails = async (
  _: any,
  input: { input: CreateDemoToolInput }
) => {
  try {
    const { toolName, videoLink, toolUniqueName, ...rest } = input?.input;
    const findCreateDemo = await DemoToolDetails.findOne({
      toolUniqueName,
      isDeleted: false,
    });
    if (findCreateDemo) {
      throw new Error("Already Created this tool");
    }
    const createDemo = await DemoToolDetails.create({
      toolName,
      videoLink,
      ...rest,
    });

    return await createDemo.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export interface CreateDemoToolInput {
  toolName?: string;
  videoLink?: string;
  toolDetails?: string;
  toolExtras?: string;
  toolUniqueName: string;
}
