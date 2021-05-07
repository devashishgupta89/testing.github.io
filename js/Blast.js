class Blast {

    constructor()
    {
        this.x=this.y=0;
	    this.blast=0;
    }
	
	set( _x, _y, Blast)
	{
		this.x = _x;
		this.y =_y;
		this.blast = Blast;
	}
	uodate()
	{
		this.y-=.04;
	}
}
