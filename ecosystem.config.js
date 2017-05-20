module.exports = {
	apps: [{
		name: 'awsnodejs',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-52-15-164-42.us-east-2.compute.amazonaws.com',
			key: '~/.ssh/tutorial.pem',
			ref: 'origin/master',
			repo: 'git@github.com:marcboanas/AWS-NodeJS.git',
			path: '/home/ubuntu/server',
			'post-deploy': 'pm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}