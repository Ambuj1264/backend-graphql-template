import DemoToolDetails from "../../../database/model/demoToolDetails";

export const FindDemoToolDetails = async (
  _: any,
  toolUniqueName: { toolUniqueName: { toolUniqueName: string } }
) => {
  try {
    const findCreateDemo = await DemoToolDetails.findOne({
      toolUniqueName: toolUniqueName?.toolUniqueName,
      isDeleted: false,
    });

    return findCreateDemo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
