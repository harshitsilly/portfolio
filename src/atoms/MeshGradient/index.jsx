const MeshGradient = ({ className }) => {
	return (
		<>
			<div className={`mesh ${className ?? ''}`} aria-hidden="true">
				<span className="blob blobA" />
				<span className="blob blobB" />
				<span className="blob blobC" />
			</div>
			<style jsx>{`
				.mesh {
					position: absolute;
					inset: 0;
					overflow: hidden;
					pointer-events: none;
				}

				.blob {
					position: absolute;
					width: min(48vw, 420px);
					height: min(48vw, 420px);
					border-radius: 999px;
					filter: blur(70px);
					opacity: 0.28;
				}

				.blobA {
					top: -120px;
					left: -80px;
					background: var(--color-primary);
				}

				.blobB {
					top: 20%;
					right: -100px;
					background: var(--color-secondary);
				}

				.blobC {
					bottom: -160px;
					left: 35%;
					background: var(--color-decorative);
				}
			`}</style>
		</>
	);
};

export default MeshGradient;
