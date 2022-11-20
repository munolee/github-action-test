function pushBranch(githubScript) {
    const { repo, owner } = githubScript.context.repo;
    const prList = githubScript.github.rest.pulls.list({
        owner,
        repo,
    });
    console.log('--------------- 🖨 Get PR List ---------------');
    console.log('🔔 PR List: ', prList);

}

export const syncFromMain = async (githubScript) => {
    console.log('-- Print Github Script Payload --');
    console.log(githubScript.context.payload);

    await pushBranch(githubScript)
}