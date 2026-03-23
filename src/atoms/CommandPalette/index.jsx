import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../Modal';

const defaultItems = [
	{ id: 'home', title: 'Home', subtitle: 'Go to homepage', path: '/' },
	{ id: 'projects', title: 'Projects', subtitle: 'See featured projects', path: '/projects' },
	{ id: 'blog', title: 'Blog', subtitle: 'Read recent writing', path: '/blog' },
	{ id: 'career', title: 'Career', subtitle: 'Open full career timeline', path: '/career' },
	{ id: 'skills', title: 'Skills', subtitle: 'Jump to skills section', path: '/#skills' },
];

const CommandPalette = ({ isOpen, onClose, items = [] }) => {
	const router = useRouter();
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (!isOpen) {
			setQuery('');
		}
	}, [isOpen]);

	const merged = useMemo(() => {
		const map = new Map();
		[...defaultItems, ...items].forEach((item) => map.set(item.id, item));
		return Array.from(map.values());
	}, [items]);

	const filteredItems = useMemo(() => {
		const normalized = query.trim().toLowerCase();
		if (!normalized) {
			return merged;
		}
		return merged.filter((item) => {
			const haystack = `${item.title} ${item.subtitle ?? ''} ${item.path ?? ''}`.toLowerCase();
			return haystack.includes(normalized);
		});
	}, [merged, query]);

	const onPick = async (item) => {
		onClose();
		if (item.path) {
			await router.push(item.path);
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<Modal onClose={onClose} style={{ width: 'min(700px, 92vw)' }}>
			<div className="palette">
				<input
					autoFocus
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder="Search pages, sections, and actions..."
				/>
				<div className="results">
					{filteredItems.length ? (
						filteredItems.map((item) => (
							<button key={item.id} className="item" onClick={() => onPick(item)}>
								<span className="title">{item.title}</span>
								<span className="sub">{item.subtitle ?? item.path}</span>
							</button>
						))
					) : (
						<div className="empty">No results found</div>
					)}
				</div>
			</div>
			<style jsx>{`
				.palette {
					display: flex;
					flex-direction: column;
					gap: 14px;
				}

				input {
					padding: 14px 16px;
					font-size: 1rem;
					border: 1px solid var(--color-gray-300);
					border-radius: 10px;
					outline: none;
					background: var(--color-subtle-floating);
					color: var(--color-text);
				}

				input:focus {
					border-color: var(--color-primary);
				}

				.results {
					display: flex;
					flex-direction: column;
					gap: 10px;
					max-height: min(60vh, 420px);
					overflow: auto;
				}

				.item {
					all: unset;
					display: flex;
					flex-direction: column;
					gap: 4px;
					padding: 12px 14px;
					border: 1px solid var(--color-gray-200);
					border-radius: 10px;
					cursor: pointer;
					background: var(--color-subtle-floating);
				}

				.item:hover {
					border-color: var(--color-primary);
				}

				.title {
					font-weight: 600;
				}

				.sub,
				.empty {
					font-size: 0.9rem;
					opacity: 0.8;
				}

				@media only screen and (max-width: 600px) {
					input {
						font-size: 0.95rem;
					}
				}
			`}</style>
		</Modal>
	);
};

export default CommandPalette;
