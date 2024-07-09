export default function ExerciseList (items) {
	items = Array.isArray(items) ? items.join("\n") : items;
	return `
        <ul class="w-full" id="exercise-list">
          ${items}
        </ul>
    `;
}