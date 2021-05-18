import { createMablTestRunner, TestRunConfig } from "@mablhq/mabl-cli";

jest.setTimeout(180000);

const CICD_BRANCH_NAME = process.env.CI_BRANCH;

const runConfig: TestRunConfig = {
	credentialsId: "CREDS_ID",
	environmentId: "ENVIRONMENT_ID",
	workspaceId: "VNdnq8ARGOYVbctTsjO9w-w",
	url: "http://localhost:8080",
	branchName: CICD_BRANCH_NAME ?? "master",
	headless: true, // toggle to watch tests locally
};

describe("Super important mabl tests", () => {
	it("This needs to always work", async () => {
		const mablTestRunner = await createMablTestRunner({
			testId: "TEST_ID",
			...runConfig,
		});
		const result = await mablTestRunner.run();
		expect(result.success).toEqual(true);
	});
});
