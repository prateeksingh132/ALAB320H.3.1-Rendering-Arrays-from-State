
import Score from "./Score";

export default function Learner({ l }) {


    return (


        <div>

            <h2>{l.name}</h2>
            <p>{l.bio}</p>


            <div>

                {

                    l.scores.map((score) => (

                        <Score s={score} />

                    )


                    )

                }

            </div>

        </div>

    );


}