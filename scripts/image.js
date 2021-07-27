const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cwebpPath = path.join(process.cwd(), 'scripts/utils/libwebp-1.2.0-windows-x64/bin/cwebp.exe');

function convertImage(imageDir = path.join(process.cwd(), 'public/images')) {
	const files = fs.readdirSync(imageDir);
	for (let i = 0; i < files.length; i++) {
		const filePath = path.join(imageDir, files[i]);
		if (fs.lstatSync(filePath).isDirectory()) {
			convertImage(filePath);
		} else {
			const ext = path.parse(filePath).ext;
			if (!['.png', '.jpg'].includes(ext)) {
				continue;
			}
			const filePathWithoutExt = filePath.substr(0, filePath.lastIndexOf('.'));
			try {
				execSync(`${cwebpPath} ${filePath} -q 80 -o ${filePathWithoutExt}.webp`);
			} catch (error) {
				console.log(filePath, error);
			}
		}
	}
}

convertImage();
