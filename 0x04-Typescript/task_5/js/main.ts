// js/main.ts

// Interface for MajorCredits with a brand property for nominal typing
interface MajorCredits {
  credits: number;
  // The '__brand' property (often named __type, __nominal, etc.) is a phantom property
  // that exists only at the type level. It does not exist at runtime.
  // It helps TypeScript differentiate between types that have the same structure.
  __brand: 'MajorCredits';
}

// Interface for MinorCredits with a brand property for nominal typing
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum MajorCredits subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits', // Ensure the brand is correctly assigned in the return type
  };
}

// Function to sum MinorCredits subjects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits', // Ensure the brand is correctly assigned in the return type
  };
}


// --- Example Usage and Console Logs ---

// Create example MajorCredits subjects
const majorSubject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

// Sum MajorCredits
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Total Major Credits:', totalMajorCredits); // Expected: { credits: 7, __brand: 'MajorCredits' }

// Create example MinorCredits subjects
const minorSubject1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

// Sum MinorCredits
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Minor Credits:', totalMinorCredits); // Expected: { credits: 3, __brand: 'MinorCredits' }

// --- Demonstrating nominal typing (uncomment to see TypeScript error) ---
// This line would cause a TypeScript compilation error because MajorCredits and MinorCredits
// are nominally distinct due to their '__brand' properties, even though their 'credits' property
// is structurally compatible.
// const invalidSum = sumMajorCredits(majorSubject1, minorSubject1);
// console.log('Invalid Sum (will cause TS error if uncommented):', invalidSum);


// --- Webpack-dev-server Display in Browser ---
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    let outputHtml = '<h2>Task 5: Brand Convention & Nominal Typing</h2>';

    outputHtml += '<h3>Major Credits Summation:</h3>';
    outputHtml += `<p>Subject 1 Credits: ${majorSubject1.credits}</p>`;
    outputHtml += `<p>Subject 2 Credits: ${majorSubject2.credits}</p>`;
    outputHtml += `<p><strong>Total Major Credits: ${totalMajorCredits.credits}</strong></p>`;
    outputHtml += `<p><em>Brand Type: '${totalMajorCredits.__brand}'</em></p>`;

    outputHtml += '<h3>Minor Credits Summation:</h3>';
    outputHtml += `<p>Subject 1 Credits: ${minorSubject1.credits}</p>`;
    outputHtml += `<p>Subject 2 Credits: ${minorSubject2.credits}</p>`;
    outputHtml += `<p><strong>Total Minor Credits: ${totalMinorCredits.credits}</strong></p>`;
    outputHtml += `<p><em>Brand Type: '${totalMinorCredits.__brand}'</em></p>`;

    outputHtml += `<p><em>Check your browser's console for raw object outputs and try uncommenting the <code>invalidSum</code> line in <code>main.ts</code> to observe the TypeScript nominal typing error.</em></p>`;

    appElement.innerHTML = outputHtml;
  } else {
    console.error("Element with ID 'app' not found.");
  }
});