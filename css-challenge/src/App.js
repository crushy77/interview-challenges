import './App.css';

function App() {
  return (
    <section className="section-exercise">
      <div class="container profile">
          <div class="left">
              <h1>Hi, Jared!</h1>
              <p class="muted">23 Jan, 2021</p>
          </div>
          <a href="#" class="notification-bell"><i class="fas fa-bell"></i></a>
      </div>

      <div class="search container">
            <form>
                <div class="form-field">
                    <input class="search-input" type="text" placeholder="Search"/>
                </div>

                <div class="mood-question">
                    <h4>How do you feel?</h4>
                    <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                </div>
                
                <div class="mood-options">
                    <div class="mood-item">
                        <label for="Badly">
                            <input type="radio" name="mood" id="Badly" value="badly"/>
                            <img class="radio-emoji" src="images/sad-1F622.svg" alt="Feeling badly emoji"/>
                            <p>Badly</p>
                        </label> 
                    </div>
                    <div class="mood-item">
                        <label for="Fine">
                            <input type="radio" name="mood" id="Fine" value="fine"/>
                            <img class="radio-emoji" src="images/fine-1F60A.svg" alt="Feeling fine emoji"/>
                            <p>Fine</p>
                        </label>
                    </div>
                    <div class="mood-item">
                        <label for="Well">
                            <input type="radio" name="mood" id="Well" value="well"/>
                            <img class="radio-emoji" src="images/well-1F601.svg" alt="Feeling well emoji"/>
                            <p>Well</p>
                        </label>

                    </div>
                    <div class="mood-item">
                        <label for="Excellent">
                            <input type="radio" name="mood" id="Excellent" value="excellent"/>
                            <img class="radio-emoji" src="images/ex-1F603.svg" alt="Feeling excellent emoji"/>
                            <p>Excellent</p>    
                        </label>
                    </div>
                </div>
            </form>
        </div>

        <div class="exercise-list container">
            <div class="list-knob">
                <a href="#"><i class="fas fa-minus"></i></a>
            </div>
            
            <div class="exercise-heading">
                <h4>Exercises</h4>
                <a href="#"><i class="fas fa-ellipsis-h"></i></a>
            </div>
            
            <div class="exercise-item active-shadow">
                <a class="card-logo orange" href="#"><i class="fas fa-heart"></i></a>
                <div>
                    <a href="#"><h5>Speaking skills</h5></a>
                    <p class="muted">16 exercises</p>
                </div>
                <a href="#" class="ts-color"><i class="fas fa-ellipsis-h"></i></a>
            </div>

            <div class="exercise-item">
                <a class="card-logo primary-color" href="#"><i class="fas fa-user"></i></a>
                <div>
                    <a href="#"><h5>Reading speed</h5></a>
                    <p class="muted">16 exercises</p>
                </div>
                <a href="#" class="ts-color"><i class="fas fa-ellipsis-h"></i></a>
            </div>
            
            <div class="exercise-item">
                <a class="card-logo burgundy" href="#"><i class="fas fa-eye"></i></a>
                <div>
                    <a href="#"><h5>Cognition skills</h5></a>
                    <p class="muted">16 exercises</p>
                </div>
                <a href="#" class="ts-color"><i class="fas fa-ellipsis-h"></i></a>
            </div>
        </div>

        <nav class="mobile-menu-bar">
            <div class="mobile-menu container">
                <a href="#"><i class="fas fa-home active"></i></a>
                <a href="#"><i class="fas fa-th-large"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
                <a href="#"><i class="fas fa-user"></i></a>
            </div>
        </nav>

    </section>
  );
}

export default App;
