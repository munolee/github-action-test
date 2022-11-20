import { GithubScriptInput } from './types/github-script.type';

function pushBranch(githubScript: GithubScriptInput) {
    const { repo, owner } = githubScript.context.repo;
    const prList = githubScript.github.rest.pulls.list({
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