// [object Object] - Versions manager  [ ID: 5bc7bb444be9774f100000c3  (versions-manager) ]
// URL: https://www.codewars.com/kata/5bc7bb444be9774f100000c3
// Category: ALGORITHMS  |  Tags: ALGORITHMS | ARRAYS | STRINGS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
class MyVM {
	constructor(version) {
		const v = `${version || '0.0.1'}`.split`.`.slice(0, 3).map(Number);
		if (v.some(isNaN)) { throw new Error('Error occured while parsing version!'); }

		this.x = v[0] || 0;
		this.y = v[1] || 0;
		this.z = v[2] || 0;
		this.log = [];
	}

	setVersion(x, y, z, log = true) {
		log && this.log.push([this.x, this.y, this.z]);
		this.x = x;
		this.y = y;
		this.z = z;
	}

	major() {
		this.setVersion(this.x + 1, 0, 0);
		return this;
	}

	minor() {
		this.setVersion(this.x, this.y + 1, 0);
		return this;
	}

	patch() {
		this.setVersion(this.x, this.y, this.z + 1);
		return this;
	}

	rollback() {
		if (this.log.length) {
			this.setVersion(...this.log.pop(), false);
			return this;
		}

		throw new Error('Cannot rollback!');
	}

	release() {
		return `${this.x}.${this.y}.${this.z}`;
	}
};

const referenceManager = v => new MyVM(v);

describe('VersionManager tests', () => {
    it('Initialization tests', () => {
      Test.assertEquals(vm().release(), '0.0.1', 'Default initial version');
      Test.assertEquals(vm('').release(), '0.0.1', 'Default initial version');
      Test.assertEquals(vm('1.2.3').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1').release(), '1.0.0', 'Default minor version is 0');
      Test.assertEquals(vm('1.1').release(), '1.1.0', 'Default patch is 0');
    });

    it('Major releases tests', () => {
      Test.assertEquals(vm().major().release(), '1.0.0');
      Test.assertEquals(vm('1.2.3').major().release(), '2.0.0');
      Test.assertEquals(vm('1.2.3').major().major().release(), '3.0.0');
    });

    it('Minor releases tests', () => {
      Test.assertEquals(vm().minor().release(), '0.1.0');
      Test.assertEquals(vm('1.2.3').minor().release(), '1.3.0');
      Test.assertEquals(vm('1').minor().release(), '1.1.0');
      Test.assertEquals(vm('4').minor().minor().release(), '4.2.0');
    });

    it('Patch releases tests', () => {
      Test.assertEquals(vm().patch().release(), '0.0.2');
      Test.assertEquals(vm('1.2.3').patch().release(), '1.2.4');
      Test.assertEquals(vm('4').patch().patch().release(), '4.0.2');
    });

    it('Rollbacks tests', () => {
      Test.assertEquals(vm().major().rollback().release(), '0.0.1');
      Test.assertEquals(vm().minor().rollback().release(), '0.0.1');
      Test.assertEquals(vm().patch().rollback().release(), '0.0.1');
      Test.assertEquals(vm().major().patch().rollback().release(), '1.0.0');
      Test.assertEquals(vm().major().patch().rollback().major().rollback().release(), '1.0.0');
    });
    
    it('Seperated calls', () => {
      const m = vm('1.2.3');
      m.major();
      m.minor();
      Test.assertEquals(m.release(), '2.1.0');
    });
    
    it('Exception tests', () => {
      const checkError = (fn, error) => {
        try {
          fn();
          Test.expect(false, 'An error should be thrown');
        } catch (e) {
          Test.expect(e instanceof Error);
          Test.assertEquals(e.message, error);
        }
      }
      
      checkError(() => { vm('a.b.c'); }, 'Error occured while parsing version!');
      checkError(() => { vm().rollback(); }, 'Cannot rollback!');
    });
    
    describe('Random tests', () => {
      const apply = (manager, { version, steps }) => {
        let vm;
        try {
          vm = manager(version);
          for (let i = 0; i < steps.length; i++) {
            vm[steps[i]]();
          }
          return vm.release();
        } catch(e) {
          return e.message;
        }
      };
    
      const genRandomTests = () => {
        const makeVersion = () => {
          const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
          return [...new Array(getRandomInt(0, 5))]
            .map(() => {
              const n = getRandomInt(0, 75);
              return n > 64 ? String.fromCharCode(n + 32) : n; 
            }).join`.`;
        };
  
        const makeSteps = () => {
          const list = ['major', 'minor', 'patch', 'rollback'];
          return [...new Array(Math.floor(Math.random() * 10))]
            .map(() => list[Math.floor(Math.random() * list.length)]);
        };
    
        return [...new Array(100)].map(() => ({
          steps: makeSteps(),
          version: makeVersion(),
        }));
      };

      it('Tests', () => {
        genRandomTests().forEach(test => {
          Test.assertEquals(apply(vm, test), apply(referenceManager, test));
        });
      });
    });
});
