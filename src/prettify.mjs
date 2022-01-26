import { exec } from 'child_process';

const prettify = (data, callback, sort=false) => {
	let command = `echo '${data}' | jq`;
	if (sort) command += ' -S';

	exec(command, (error, stdout, stderr) => {
		if (error) throw Error(`error: ${error.message}`);
		if (stderr) throw Error(`stderr: ${stderr}`);
	
		callback(stdout);
	});
}

export default prettify;
