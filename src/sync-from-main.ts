import { GithubScriptInput } from './types/github-script.type';

const pushBranch = async (githubScript: GithubScriptInput) => {
    const { repo, owner } = githubScript.context.repo;
    const prList = await githubScript.github.rest.pulls.list({
        owner,
        repo,
    });
    console.log('--------------- 🖨 Get PR List ---------------');
    console.log('🔔 PR List: ', prList);
}

export const syncFromMain = async (githubScript: GithubScriptInput) => {
    console.log('-- Print Github Script Payload --');
    console.log(githubScript.context.payload);

    await pushBranch(githubScript)
}