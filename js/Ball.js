class Ball {

    constructor()
    {
		this.x=this.y=0;
		this.vx=this.vy=0;
	    this.ang =0;
	    this.gayab=0;
	    this.SolidCount=0;
    }
	
	
	set( _x, _y, _vx, _vy)
	{
		this.x = _x;
		this.y = _y;
		this.vx = _vx;
		this.vy = _vy;
		this.gayab = 0;
		this.SolidCount = 0;
	}
	update()
	{
		if(this.gayab>0)
		{
			if(this.gayab==2)
            this.x =-100;
			this.gayab--;
		}
		else if (this.vy != 0 && this.vx != 0) {
			this.x += this.vx;
			this.y += this.vy;
			if(this.vy>-.2)
            this.vy -= .005;
			if(mulCount == 10)
                this.vx -= .005;
		}
		
		
	}
}
