import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/anu">Anu</Link>
                </li>
                <li>
                    <Link href="/studentlist/rai">Rai</Link>
                </li>
                <li>
                    <Link href="/studentlist/deb">Deb</Link>
                </li>
                <li>
                    <Link href="/studentlist/keya">Keya</Link>
                </li>
            </ul>
        </div>
    )
}