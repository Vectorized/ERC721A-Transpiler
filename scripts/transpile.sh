# Download the latest ERC721A.
if [[ -f "ERC721A/package.json" ]]; then
	cd ERC721A;
	git fetch --all; 
	git reset --hard origin/main;
	cd ..;
else
	git clone https://github.com/chiru-labs/ERC721A.git;
fi

# Replace the contracts folder with the latest copy.
rm -r contracts;
rm -r @openzeppelin;
cp -r ERC721A/contracts contracts;

# Recompile the contracts.
rm -r artifacts;
npx hardhat compile;

# We can remove the contracts folder, 
# the transpiler will regenerate based on the artifacts.
rm -r contracts;
# Compile the typescript.
npx tsc;
# Run the transpiler.
node dist/cli.js;

# We don't need the generated Initializable,
# we will use the one in OpenZeppelin's contracts-upgradable.
rm -r contracts/Initializable.sol;

# We can remove the byproduct of the transpiler.
rm -r @openzeppelin;

# Replace the imports.
node scripts/replace-imports.js;
