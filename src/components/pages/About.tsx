import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AboutPage() {
  const products = [
    { id: 1, name: "Smart IoT Sensor", desc: "Real-time monitoring for energy usage", price: "$120" },
    { id: 2, name: "Energy Gateway", desc: "Connects all devices to cloud dashboard", price: "$250" },
    { id: 3, name: "AI Analytics Module", desc: "Optimize energy savings with AI", price: "$99" },
  ];

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-white text-2xl">About Us</h1>
      <p className="text-gray-400">
        Vidyutrack is a smart energy monitoring solution that combines IoT, AI, and renewable integration.
      </p>

      <h2 className="text-white text-lg">Our Products</h2>
      <div className="grid gap-4">
        {products.map((p) => (
          <Card key={p.id} className="bg-gray-800/50 border-gray-700/30">
            <CardContent className="p-4">
              <h3 className="text-white font-semibold">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              <p className="text-green-400 mt-2">{p.price}</p>
              <Button className="mt-3">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
